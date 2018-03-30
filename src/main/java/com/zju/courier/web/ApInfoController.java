package com.zju.courier.web;

import com.zju.courier.entity.APInfo;
import com.zju.courier.service.ApInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/APInfo")
public class ApInfoController {
    @Autowired
    private ApInfoService apInfoService;

    @RequestMapping("/list")
    public @ResponseBody
    List<APInfo> list() {
        return apInfoService.list();
    }

    @RequestMapping("/query")
    public @ResponseBody
    APInfo query(@RequestBody Map<Object,String> params) {
        return apInfoService.query(Integer.valueOf(params.get("ap_id")));
    }

    @RequestMapping("/update")
    public @ResponseBody
    void update(@RequestBody APInfo apInfo) {
        apInfoService.update(apInfo);
    }

    @RequestMapping("/add")
    public @ResponseBody
    void insert(@RequestBody APInfo apInfo) {
        apInfoService.insert(apInfo);
    }

    @RequestMapping("/delete")
    public @ResponseBody
    void delete(@RequestBody Map<Object,String> params) {
        apInfoService.delete(Integer.valueOf(params.get("ap_id")));
    }
}
