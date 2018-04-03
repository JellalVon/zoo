package com.zju.courier.service.impl;

import com.zju.courier.dao.ApInfoDao;
import com.zju.courier.dao.CriteriaDao;
import com.zju.courier.dao.RankDao;
import com.zju.courier.entity.APInfo;
import com.zju.courier.entity.Criteria;
import com.zju.courier.entity.Rank;
import com.zju.courier.pojo.Score;
import com.zju.courier.service.MonthRankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MonthRankServiceImpl implements MonthRankService {

    @Autowired
    private ApInfoDao apInfoDao;

    @Autowired
    private RankDao rankDao;

    @Autowired
    private CriteriaDao criteriaDao;

    private static float NUM = 0.1201f;
    private static float TIMES = 0.1609f;
    private static float TOTAL = 0.2343f;
    private static float AVG = 0.4536f;
    private static float DISTANCE= 0.0499f;

    @Override
    public List<Score> rank(String year, String month) {
        Map<Integer, Score> map = new HashMap<>(32);
        List<APInfo> apInfoList = apInfoDao.list();
        for (APInfo apInfo : apInfoList) {
            Score score = new Score();
            score.setApInfo(apInfo);
            score.setApId(apInfo.getAp_id());
            score.setDistance(apInfo.getDistance());
            map.put(apInfo.getAp_id(), score);
        }
        List<Rank> ranks = rankDao.queryByMonth(year,month);
        for (Rank rank : ranks) {
            Score score = map.get(rank.getAp_id());
            score.setNum(score.getNum() + rank.getNum_pre());
            score.setTimes(score.getTimes() + rank.getTimes_pre());
            score.setTotal(score.getTotal() + rank.getTotal_time());
            score.setAvg(score.getAvg() + rank.getAvg_time());
            score.setDays(score.getDays() + 1);
        }
        Criteria criteria = criteriaDao.query(1);
        int days = map.get(1).getDays();
        float MAX_NUM = criteria.getNum_pre() * days;
        float MAX_TIMES = criteria.getTimes_pre() * days;
        float MAX_TOTAL = criteria.getTotal_time() * days;
        float MAX_AVG = criteria.getAvg_time() * days;
        float MAX_DIS = criteria.getDistance();
        for (Score score : map.values()) {
            float num = (score.getNum() > MAX_NUM ? 1f : score.getNum() / MAX_NUM) * NUM;
            float times = (score.getTimes() > MAX_TIMES ? 1f : score.getTimes() / MAX_TIMES) * TIMES;
            float total = (score.getTotal() > MAX_TOTAL ? 1f : score.getTotal() / MAX_TOTAL) * TOTAL;
            float avg = (score.getAvg() > MAX_AVG ? 1f : score.getAvg() / MAX_AVG) * AVG;
            float distance = (score.getDistance() > MAX_DIS ? 1f : score.getDistance() / MAX_DIS) * DISTANCE;
            float result = (num+times+total+avg+distance) *100;
            score.setScore((float) Math.round(result*100)/100);
        }
        List<Score> values = new ArrayList<>(map.values());
        values.sort(new Comparator<Score>() {
            @Override
            public int compare(Score o1, Score o2) {
                return Float.compare(o2.getScore(), o1.getScore());
            }
        });
        return values;
    }
}
