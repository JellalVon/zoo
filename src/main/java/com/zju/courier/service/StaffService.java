package com.zju.courier.service;

import com.zju.courier.entity.Staff;

import java.util.List;

public interface StaffService {
    List<Staff> list();

    Staff query(int id);

    void update(Staff staff);

    void insert(Staff staff);

    void delete(int id);
}
