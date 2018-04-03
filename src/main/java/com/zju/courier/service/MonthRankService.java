package com.zju.courier.service;

import com.zju.courier.pojo.Score;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MonthRankService {
    public List<Score> rank(String yeaar, String month);
}
