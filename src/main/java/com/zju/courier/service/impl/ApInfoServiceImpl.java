package com.zju.courier.service.impl;

import com.zju.courier.dao.ApInfoDao;
import com.zju.courier.entity.APInfo;
import com.zju.courier.service.ApInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApInfoServiceImpl implements ApInfoService {
    @Autowired
    private ApInfoDao apInfoDao;

    @Override
    public List<APInfo> list() {
        return apInfoDao.list();
    }

    @Override
    public APInfo query(int ap_id) {
        return apInfoDao.query(ap_id);
    }

    @Override
    public void update(APInfo apInfo) {
        apInfoDao.update(apInfo);
    }

    @Override
    public void insert(APInfo apInfo) {
        apInfoDao.insert(apInfo);
    }

    @Override
    public void delete(int ap_id) {
        apInfoDao.delete(ap_id);
    }
}
