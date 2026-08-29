package com.operationalreadiness.backend.service;

import org.springframework.stereotype.Service;
import com.operationalreadiness.backend.model.Asset;
import java.util.List;
import com.operationalreadiness.backend.repository.AssetRepository;
import com.operationalreadiness.backend.model.AssetStatus;

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

    public void deleteAsset(Long id) {
        assetRepository.deleteById(id);
    }

    public Asset updateAsset(Long id, Asset updatedAsset) {
        Asset existingAsset = assetRepository.findById(id).orElse(null);

        if (existingAsset == null) {
            return null;
        }

        existingAsset.setName(updatedAsset.getName());
        existingAsset.setType(updatedAsset.getType());
        existingAsset.setStatus(updatedAsset.getStatus());

        return assetRepository.save(existingAsset);

    }

    public Asset updateAssetStatus(Long id, AssetStatus status) {
        Asset existingAsset = assetRepository.findById(id).orElse(null);

        if (existingAsset == null) {
            return null;
        }
        existingAsset.setStatus(status);

        return assetRepository.save(existingAsset);
    }

}