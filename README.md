# FUTURE_CS_03
End-to-end API Security Risk Analysis lab simulating real-world SaaS AppSec workflows using Kali Linux and Postman

# 🔐 SaaS API Security Risk Analysis Lab

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/468d298e-c146-4a57-8fb8-1bc66009effb" />

## 📌 Executive Summary

Modern cloud-native and SaaS ecosystems rely entirely on distributed microservices and Web APIs to handle internal state, power client dashboards, and ingest business-critical data. Consequently, APIs have become the primary attack surface for sophisticated enterprise threat actors.

This repository features a complete **SaaS API Security Risk Analysis simulation** built inside an isolated local environment using **Kali Linux**. Modeled after real-world engagements conducted by Application Security (AppSec) Teams and SaaS Security Consultants, this project illustrates a strict **read-only, non-intrusive security audit**. The core goal is to map API endpoints, evaluate architectural exposure vectors against the **OWASP API Security Top 10**, parse header configurations, and transform raw technical telemetry into developer-remediable, business-focused reports.

## 🎯 Lab Objectives

*   **Attack Surface Discovery:** Emulate adversarial discovery workflows to identify undocumented endpoints and map out hidden routing structures.
*   **Authentication & Trust Analysis:** Critically evaluate token lifecycle postures, key exposure risks, and public-facing resource isolation.
*   **Authorization Architecture Audit:** Test logical access boundaries between distinct user sessions to uncover access delegation flaws.
*   **Data Leakage Minimization:** Inspect JSON response payloads for excessive attribute mapping, debug strings, or structural metadata exposure.
*   **Risk Quantitization & Translation:** Classify vulnerabilities dynamically (Low, Medium, High) and formulate clear, engineering-centric mitigation code blueprints.

## ⚖️ Scope & Rules of Engagement

To remain aligned with professional ethical hacking standards and legal compliance policies, the testing lifecycle operated under a rigid perimeter:

### 🟩 Approved Operations
*   Localhost-bounded (`127.0.0.1`) analysis exclusively.
*   Passive request monitoring, response extraction, and endpoint enumeration.
*   Configuration reviews, route mapping, and HTTP security header compliance audits.
*   Manual analysis of native error-handling architectures.

### 🟥 Restricted Operations (Out-of-Scope)
*   Active payload weaponization or automated exploit execution.
*   Credential stuffing, account takeover (ATO), or brute-force automation.
*   Stress testing, layer-7 exhaustion, or Denial of Service (DoS) simulations.
*   Targeting external cloud staging or production environments

## 🛠️ Technology Stack & Security Tooling

The assessment runtime environment and analysis toolkit were structured as follows:

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/164348ff-9a48-4591-b8ba-bd042323ea2f" />

## 🏗️ Simulated Lab Architecture & API Mapping

The mock infrastructure provisions a modern, RESTful customer account dashboard backend running locally at `http://localhost:3000`.

### Exposed Endpoint Routing
```http
GET  /                   # Root application landing (Environment identification)
GET  /health             # Node deployment diagnostics & health checking
GET  /api/users          # Collective profile directory querying 
GET  /api/users/:id      # Granular query pathing for singular records

**Core Security Risks Evaluated**
  [ OWASP API-1 ] ──► Broken Object Level Authorization (BOLA) / IDOR Paths
  [ OWASP API-2 ] ──► Broken Authentication / Public exposure of sensitive data
  [ OWASP API-3 ] ──► Broken Object Property Level Authorization (Excessive Data)
  [ OWASP API-4 ] ──► Unrestricted Resource Consumption (Missing Rate Limiting)
  [ OWASP API-7 ] ──► Server Misconfiguration (Weak Security Headers & Verbose Errors)

**📊 Security Findings & Risk Matrix**

<img width="993" height="440" alt="image" src="https://github.com/user-attachments/assets/d933db08-5733-48c8-a56a-b73c1b1d25f8"/>
