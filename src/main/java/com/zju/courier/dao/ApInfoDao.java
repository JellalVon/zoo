package com.zju.courier.dao;

import com.zju.courier.entity.APInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ApInfoDao {
    List<APInfo> list();

    APInfo query(int ap_id);

    void update(@Param("apInfo") APInfo apInfo);

    void insert(@Param("apInfo") APInfo apInfo);

    void delete(int ap_id);
}
