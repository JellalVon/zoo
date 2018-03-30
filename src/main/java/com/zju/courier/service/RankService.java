package com.zju.courier.service;

import com.zju.courier.entity.Rank;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RankService {
    List<Rank> query(List<String> apids, String start, String end);
}
