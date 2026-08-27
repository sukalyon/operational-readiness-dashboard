package com.operationalreadiness.backend.service;

import org.springframework.stereotype.Service;
import com.operationalreadiness.backend.model.Asset;
import com.operationalreadiness.backend.model.AssetStatus;
import java.util.List;

@Service
public class AssetService {

    public List<Asset> getAllAssets() {
        return List.of(
                new Asset(1L, "F-16 #01", "F-16", AssetStatus.READY),
                new Asset(2L, "UAV #01", "UAV", AssetStatus.READY),
                new Asset(3L, "Radar System #01", "RADAR", AssetStatus.OFFLINE));
    }

    public Asset getAssetById(Long id) {
        for (Asset asset : getAllAssets()) {
            if (asset.getId().equals(id)) {
                return asset;
            }
        }
        return null;
    }
}