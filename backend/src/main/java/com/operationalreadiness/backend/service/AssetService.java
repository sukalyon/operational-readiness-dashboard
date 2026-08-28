package com.operationalreadiness.backend.service;

import org.springframework.stereotype.Service;
import com.operationalreadiness.backend.model.Asset;
import java.util.List;
import com.operationalreadiness.backend.repository.AssetRepository;

@Service
public class AssetService {
    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Asset getAssetById(Long id) {
        return assetRepository.findById(id).orElse(null);
    }

    public Asset createAsset(Asset asset) {
        return assetRepository.save(asset);
    }
}