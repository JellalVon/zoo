package com.zju.courier.service.impl;

import com.zju.courier.dao.UserDao;
import com.zju.courier.entity.User;
import com.zju.courier.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserDao userDao;

    @Override
    public User query(String username, String passwd) {
        return userDao.query(username, passwd);
    }

    @Override
    public void insert(User user) {
        userDao.insertUser(user);
    }
}
