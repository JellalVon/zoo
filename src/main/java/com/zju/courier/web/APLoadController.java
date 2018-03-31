package com.zju.courier.web;

import com.zju.courier.entity.LoadForMap;
import com.zju.courier.service.APLoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/load")
public class APLoadController {
    @Autowired
    private APLoadService apLoadService;

    @RequestMapping("/list")
    public @ResponseBody
    List<LoadForMap> list() {
        System.out.println(apLoadService.list());
        return apLoadService.list();
    }
}
