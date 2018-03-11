package com.zju.courier.service;

import com.zju.courier.entity.User;

public interface UserService {
    User query(String username, String passwd);

    void insert(User user);
}
