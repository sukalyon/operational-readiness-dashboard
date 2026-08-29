package com.operationalreadiness.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.operationalreadiness.backend.service.AssetService;
import com.operationalreadiness.backend.model.Asset;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.operationalreadiness.backend.model.AssetStatus;

@RestController
public class AssetController {
    private final AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @GetMapping("/api/assets")
    public List<Asset> getAllAssets() {
        return assetService.getAllAssets();
    }

    @GetMapping("/api/assets/{id}")
    public Asset getAssetById(@PathVariable Long id) {
        return assetService.getAssetById(id);
    }

    @PostMapping("/api/assets")
    public Asset createAsset(@RequestBody Asset asset) {
        return assetService.createAsset(asset);
    }

    @DeleteMapping("/api/assets/{id}")
    public void deleteAsset(@PathVariable Long id) {
        assetService.deleteAsset(id);

    }

    @PutMapping("/api/assets/{id}")
    public Asset updateAsset(@PathVariable Long id, @RequestBody Asset updatedAsset) {
        return assetService.updateAsset(id, updatedAsset);
    }

    @PatchMapping("/api/assets/{id}/status")
    public Asset updateAssetStatus(@PathVariable Long id, @RequestParam AssetStatus status) {
        return assetService.updateAssetStatus(id, status);
    }

}