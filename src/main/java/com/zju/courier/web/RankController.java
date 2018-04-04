package com.zju.courier.web;

import com.zju.courier.entity.Rank;
import com.zju.courier.pojo.Score;
import com.zju.courier.pojo.SumByDate;
import com.zju.courier.service.MonthRankService;
import com.zju.courier.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

@Controller
@RequestMapping("/rank")
public class RankController {

    @Autowired
    private RankService rankService;

    @Autowired
    private MonthRankService monthRankService;

    @RequestMapping("/top")
    public @ResponseBody
    List<Score> top(@RequestBody Map<Object, String> map) {
        List<Score> top = new ArrayList<>();
        String month = map.get("month");
        List<Score> scoreList = monthRankService.rank(month.split("-")[0], month.split("-")[1]);

        scoreList.sort(new Comparator<Score>() {
            @Override
            public int compare(Score o1, Score o2) {
                return o2.getNum() - o1.getNum();
            }
        });
        top.add(scoreList.get(0));

        scoreList.sort(new Comparator<Score>() {
            @Override
            public int compare(Score o1, Score o2) {
                return o2.getTimes() - o1.getTimes();
            }
        });
        top.add(scoreList.get(0));

        scoreList.sort(new Comparator<Score>() {
            @Override
            public int compare(Score o1, Score o2) {
                return Float.compare(o2.getTotal(), o1.getTotal());
            }
        });
        top.add(scoreList.get(0));

        scoreList.sort(new Comparator<Score>() {
            @Override
            public int compare(Score o1, Score o2) {
                return Float.compare(o2.getAvg(), o1.getAvg());
            }
        });
        top.add(scoreList.get(0));
        return top;

    }

    @RequestMapping("/month")
    public @ResponseBody
    List<Score> monthRank(@RequestBody Map<Object, String> map) {
        String month = map.get("month");
        List<Score> scoreList = monthRankService.rank(month.split("-")[0], month.split("-")[1]);
        return scoreList.subList(0, 10);
    }

    @RequestMapping("/query")
    public @ResponseBody
    List<SumByDate> query(@RequestBody Map<Object, String> map) {
        String start = map.get("start");
        String end = map.get("end");
        String s = map.get("ap_ids");
        List<String> list = Arrays.asList(s.split(","));
        return rankService.query(list, start, end);
    }

    @RequestMapping("/queryOne")
    public @ResponseBody
    List<Rank> queryOne(@RequestBody Map<Object, String> map) {
        String start = map.get("start");
        String end = map.get("end");
        String apId = map.get("ap_id");
        System.out.println(rankService.queryOne(apId, start, end));
        return rankService.queryOne(apId, start, end);
    }
}
