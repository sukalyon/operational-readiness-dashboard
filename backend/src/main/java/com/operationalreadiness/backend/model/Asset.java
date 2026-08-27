package com.operationalreadiness.backend.model;

public class Asset {
    private Long id;
    private String name;
    private String type;
    private AssetStatus status;

    public Asset(Long id, String name, String type, AssetStatus status) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public AssetStatus getStatus() {
        return status;
    }
}
