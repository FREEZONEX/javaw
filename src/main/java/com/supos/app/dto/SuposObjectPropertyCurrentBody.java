package com.supos.app.dto;

import com.alibaba.fastjson.JSONObject;
import com.supos.app.pojo.Dto;
import lombok.Getter;
import lombok.Setter;

/**
 * @Description
 * @Author chenfei
 * @Date 2021/4/14 13:53
 */
@Getter
@Setter
public class SuposObjectPropertyCurrentBody extends Dto {

    private String[] params;

    @Override
    public String toString() {
        return JSONObject.toJSONString(this);
    }
}
