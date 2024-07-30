package com.supos.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;


import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Controller
@RequestMapping("/api")
public class HtmlFileController {

    @Value("${app.htmlStoragePath}")
    private String htmlStoragePath;

    @CrossOrigin(origins = "*")
    @PostMapping("/saveHtml")
    public ResponseEntity<String> saveHtmlToFile(@RequestBody String htmlData, @RequestParam("fileName") Optional<String> optionalFileName) {
        if (!StringUtils.hasText(htmlData)) {
            return ResponseEntity.badRequest().body("Invalid HTML content");
        }

        String fileName = optionalFileName.orElse("default.html"); // 如果没有提供文件名，默认为 "default.html"
        Path path = Paths.get(htmlStoragePath, fileName);

        try (BufferedWriter writer = Files.newBufferedWriter(path)) {
            writer.write(htmlData);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to write HTML to file");
        }

        return ResponseEntity.ok("HTML content saved successfully at " + path.toString());
    }
}
