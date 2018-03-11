package com.zju.courier.dao;

import com.zju.courier.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

public interface UserDao {

    User query(@Param("username") String username, @Param("passwd") String passwd);

    Map<String,Object> query2(@Param("username") String username, @Param("passwd") String passwd);

    void insertUser(User user);
}
