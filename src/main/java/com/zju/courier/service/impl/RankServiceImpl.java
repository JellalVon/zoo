package com.zju.courier.service.impl;

import com.zju.courier.dao.RankDao;
import com.zju.courier.entity.Rank;
import com.zju.courier.service.RankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankServiceImpl implements RankService {

    @Autowired
    private RankDao rankDao;

    @Override
    public List<Rank> query(List<String> apids, String start, String end) {
        return rankDao.query(apids, start, end);
    }

    @Override
    public List<Rank> queryOne(String apid, String start, String end) {
        return rankDao.queryOne(apid, start, end);
    }
}
