package com.supos.app.request;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import com.supos.app.aksk.SignUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

/**
 * SuposRequestManager
 *
 * @author shenghao ni
 * @date 2024.12.08 16:37
 */
@Data
@Component
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SuposRequestManager implements Serializable {


    private static final Logger LOG = LoggerFactory.getLogger(SuposRequestManager.class);


    @Value("${supos.ak}")
    private String ak;
    @Value("${supos.sk}")
    private String sk;
    @Value("${supos.supos-address}")
    private String baseUrl;

    private String url;
    private Map<String, String> headerMap;
    private Map<String,String> queryMap;

    public HttpResponse suposApiGet(String uri, Map<String, String> headerMap, Map<String,String> queryMap) {
        SuposRequestManager suposRequest = httpGetBuilder(uri, headerMap, queryMap);
        HttpRequest request = new HttpRequest(suposRequest.getUrl())
                .addHeaders(headerMap)
                .formStr(queryMap);

        HttpResponse response = request.execute();
        return response;
    }

    private  SuposRequestManager httpGetBuilder (String uri, Map<String, String> headerMap, Map<String,String> queryMap) {
        headerMap.put("Content-Type", "application/json;charset=utf-8");
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd'T'HHmmss'Z'");
        headerMap.put("X-MC-Type", "openAPI");
        headerMap.put("X-MC-Date", sf.format(new Date()));
        sign(uri,headerMap,queryMap);

        return SuposRequestManager.builder()
                .url(baseUrl + uri)
                .headerMap(headerMap)
                .queryMap(queryMap)
                .build();
    }

    private void sign(String uri,Map<String, String> headerMap,Map<String,String> queryMap) {
        SignUtils signUtil = new SignUtils("xx", "xx", ak , sk);
        signUtil.signHeaderUseAkSk(uri, "GET", headerMap, queryMap);
    }

}