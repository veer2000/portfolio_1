# ---------- Base image ----------
FROM python:3.12-slim

# ---------- Environment ----------
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ---------- Working directory ----------
WORKDIR /app

# ---------- Install dependencies ----------
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ---------- Copy application code ----------
COPY app ./app

# Create db directory
RUN mkdir -p /app/data

# Copy initial db (optional)
COPY portfolio.db /app/data/portfolio.db

# ---------- Expose backend port ----------
EXPOSE 8000

# ---------- Run FastAPI ----------
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
