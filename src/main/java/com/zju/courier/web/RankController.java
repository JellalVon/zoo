package com.zju.courier.web;

import com.zju.courier.entity.Rank;
import com.zju.courier.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/rank")
public class RankController {

    @Autowired
    private RankService rankService;

    @RequestMapping("/query")
    public @ResponseBody
    List<Rank> query(@RequestBody Map<Object, String> map) {
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
