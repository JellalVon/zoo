package com.zju.courier.service.impl;

import com.zju.courier.dao.StaffDao;
import com.zju.courier.entity.Staff;
import com.zju.courier.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffDao staffDao;

    @Override
    public List<Staff> list() {
        return staffDao.list();
    }

    @Override
    public Staff query(int id) {
        return staffDao.query(id);
    }

    @Override
    public void update(Staff staff) {
        staffDao.update(staff);
    }

    @Override
    public void insert(Staff staff) {
        staffDao.insert(staff);
    }

    @Override
    public void delete(int id) {
        staffDao.delete(id);
    }
}
