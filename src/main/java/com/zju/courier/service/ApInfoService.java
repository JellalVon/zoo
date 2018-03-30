package com.zju.courier.service;

import com.zju.courier.entity.APInfo;

import java.util.List;

public interface ApInfoService {
    List<APInfo> list();

    APInfo query(int ap_id);

    void update(APInfo apInfo);

    void insert(APInfo apInfo);

    void delete(int ap_id);
}
