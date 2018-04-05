package com.zju.courier.web;

import com.zju.courier.entity.Staff;
import com.zju.courier.pojo.StaffPosition;
import com.zju.courier.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @RequestMapping("/load")
    public @ResponseBody
    List<StaffPosition> load() {
        return staffService.load();
    }

    @RequestMapping("/list")
    public @ResponseBody
    List<Staff> list() {
        return staffService.list();
    }

    @RequestMapping("/query")
    public @ResponseBody
    Staff query(@RequestBody Map<Object,String> params) {
        return staffService.query(Integer.valueOf(params.get("id")));
    }

    @RequestMapping("/update")
    public @ResponseBody
    void update(@RequestBody Staff staff) {
        staffService.update(staff);
    }

    @RequestMapping("/add")
    public @ResponseBody
    void insert(@RequestBody Staff staff) {
        staffService.insert(staff);
    }

    @RequestMapping("/delete")
    public @ResponseBody
    void delete(@RequestBody Map<Object,String> params) {
        staffService.delete(Integer.valueOf(params.get("id")));
    }

}
