package com.zju.courier.dao;

import com.zju.courier.entity.Criteria;
import org.apache.ibatis.annotations.Param;

public interface CriteriaDao {

    Criteria query(@Param("criteria_id") int id);

}
