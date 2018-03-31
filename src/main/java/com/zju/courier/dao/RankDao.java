package com.zju.courier.dao;

import com.zju.courier.entity.Rank;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RankDao {
    List<Rank> query(@Param("ap_ids") List<String> ap_ids,
                     @Param("start") String start, @Param("end") String end);

    List<Rank> queryOne(@Param("ap_id") String ap_id,
                  @Param("start") String start, @Param("end") String end);
}
