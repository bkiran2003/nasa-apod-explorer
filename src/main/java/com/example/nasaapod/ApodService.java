package com.example.nasaapod;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Service
public class ApodService {

    @Value("${nasa.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String BASE_URL = "https://api.nasa.gov/planetary/apod";

    // Cache single date lookup
    @Cacheable("apods")
    public ApodResponse getApod(String date) {
        String url = BASE_URL + "?api_key=" + apiKey;
        if (date != null && !date.isEmpty()) {
            url += "&date=" + date;
        }
        return restTemplate.getForObject(url, ApodResponse.class);
    }

    // Cache recent gallery list (Last 10 days)
    @Cacheable("recent_apods")
    public List<ApodResponse> getRecentApods() {
        // Calculate start date (10 days ago)
        String startDate = LocalDate.now().minusDays(10).toString();
        
        // Construct URL
        String url = BASE_URL + "?api_key=" + apiKey + "&start_date=" + startDate;
        
        // Debug Log (Check your VS Code Terminal for this!)
        System.out.println("Fetching Gallery from: " + url);

        ApodResponse[] response = restTemplate.getForObject(url, ApodResponse[].class);
        return response != null ? Arrays.asList(response) : List.of();
    }
}