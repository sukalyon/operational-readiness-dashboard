package com.operationalreadiness.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    @Enumerated(EnumType.STRING)
    private AssetStatus status;

    public Asset(Long id, String name, String type, AssetStatus status) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
    }

    public Asset() {
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
