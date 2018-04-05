package com.zju.courier.web;

import com.zju.courier.entity.User;
import com.zju.courier.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login")
    public @ResponseBody
    Boolean query(@RequestBody User user) {
        System.out.println(user);
        return userService.query(user.getUsername(), user.getPasswd()) != null;
    }

    @RequestMapping(value = "/register")
    public @ResponseBody
    void insert(@RequestBody User user) {
        userService.insert(user);
    }
}
