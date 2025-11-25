package com.example.nasaapod;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/apod")
public class ApodController {

    @Autowired
    private ApodService service;

    @GetMapping
    public ApodResponse getApod(@RequestParam(required = false) String date) {
        return service.getApod(date);
    }

    @GetMapping("/recent")
    public List<ApodResponse> getRecentApods() {
        return service.getRecentApods();
    }
}