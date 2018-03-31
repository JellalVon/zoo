package com.zju.courier.service.impl;

import com.zju.courier.dao.ApInfoDao;
import com.zju.courier.dao.LoadDao;
import com.zju.courier.entity.APInfo;
import com.zju.courier.entity.APLoad;
import com.zju.courier.entity.LoadForMap;
import com.zju.courier.service.APLoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class APLoadServiceImpl implements APLoadService {

    @Autowired
    private LoadDao loadDao;

    @Autowired
    private ApInfoDao apInfoDao;

    @Override
    public List<LoadForMap> list() {
        return loadDao.list();
    }
}
