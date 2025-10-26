#!/bin/bash

# Fix react-router-dom imports in components

# NotFound.tsx
sed -i '1s|import { useLocation, Link } from "react-router-dom";|import Link from "next/link";\nimport { usePathname } from "next/navigation";|' components/ui/NotFound.tsx

# JournalArticle.tsx
sed -i '4s|import { Link, useNavigate, useParams } from "react-router-dom";|import Link from "next/link";\nimport { useRouter, useParams } from "next/navigation";|' components/ui/JournalArticle.tsx

# Journal.tsx
sed -i '4s|import { useLocation, useNavigate } from "react-router-dom";|import { useRouter, usePathname } from "next/navigation";|' components/ui/Journal.tsx

# JournalModalRoute.tsx
sed -i '4s|import { type Location, useLocation, useNavigate, useParams } from "react-router-dom";|import { useRouter, useParams, usePathname } from "next/navigation";|' components/journal/JournalModalRoute.tsx

echo "Router imports updated!"
