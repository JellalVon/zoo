package com.zju.courier.service.impl;

import com.zju.courier.dao.ApInfoDao;
import com.zju.courier.dao.RankDao;
import com.zju.courier.entity.Rank;
import com.zju.courier.pojo.SumByDate;
import com.zju.courier.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankServiceImpl implements RankService {

    @Autowired
    private RankDao rankDao;

    @Autowired
    private ApInfoDao apInfoDao;

    @Override

    public List<SumByDate> query(List<String> apids, String start, String end) {
        List<SumByDate> sumByDateList = rankDao.query(apids, start, end);
        for (SumByDate sumByDate : sumByDateList) {
            sumByDate.setApName(apInfoDao.query(
                    sumByDate.getApId()).getAp_name());
            sumByDate.setAvg(sumByDate.getTotal()/sumByDate.getNum());
        }
        return sumByDateList;
    }

    @Override
    public List<Rank> queryOne(String apid, String start, String end) {
        return rankDao.queryOne(apid, start, end);
    }
}
