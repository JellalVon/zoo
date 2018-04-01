package com.zju.courier.dao;

import com.zju.courier.entity.Staff;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StaffDao {
    List<Staff> list();

    Staff query(int id);

    void update(@Param("staff") Staff staff);

    void insert(@Param("staff") Staff staff);

    void delete(int id);
}
