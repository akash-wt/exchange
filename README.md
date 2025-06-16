# Cryptocurrency Exchange Platform

A high-performance, real-time cryptocurrency exchange platform built with a microservices architecture. Features include order matching, real-time market data, WebSocket connections, and a modern trading interface.

## 📋 Prerequisites

- Node.js 
- Docker and Docker Compose
- Redis
- PostgreSQL with TimescaleDB extension

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/akash-wt/exchange
cd exchange
```

### 2. Start Infrastructure Services
```bash
cd Backend/docker
docker-compose up -d
```

This starts:
- TimescaleDB on port 5432
- Redis on port 6379

### 3. Initialize Database
```bash
cd Backend/db
npm install
npm run seed:db
```

### 4. Start Backend Services

**API Server:**
```bash
cd Backend/api
npm install
npm run dev
```

**Trading Engine:**
```bash
cd Backend/engine
npm install
npm run dev
```

**Database Processor:**
```bash
cd Backend/db
npm install
npm run dev
```

**WebSocket Server:**
```bash
cd Backend/ws
npm install
npm run dev
```

**Market Maker (Optional):**
```bash
cd Backend/mm
npm install
npm run dev
```

### 5. Start Frontend
```bash
cd frontend
npm install
npm run dev
```


## 📁 Project Structure

```
├── Backend/
│   ├── api/           # REST API server
│   ├── engine/        # Trading engine
│   ├── db/            # Database service
│   ├── ws/            # WebSocket server
│   ├── mm/            # Market maker
│   └── docker/        # Infrastructure setup
├── frontend/          # React frontend
└── README.md
```

##  Configuration

### Environment Variables

Each service uses environment variables for configuration. Key variables include:

- Database connection settings
- Redis connection details
- API endpoints
- WebSocket URLs

### Database Schema

The platform uses TimescaleDB for efficient time-series data storage:
- **tata_prices**: Price and volume data
- **klines_1m/1h/1w**: Materialized views for different timeframes

## 📊 API Endpoints

### Orders
- `POST /api/v1/order` - Place new order
- `DELETE /api/v1/order` - Cancel order
- `GET /api/v1/order/open` - Get open orders

### Market Data
- `GET /api/v1/depth` - Order book depth
- `GET /api/v1/trades` - Recent trades
- `GET /api/v1/tickers` - Market tickers
- `GET /api/v1/klines` - Historical price data

## 🔄 WebSocket Streams

Subscribe to real-time data streams:

```javascript
// Depth updates
{"method": "SUBSCRIBE", "params": ["depth@TATA_INR"]}

// Trade updates
{"method": "SUBSCRIBE", "params": ["trade@TATA_INR"]}

// Ticker updates
{"method": "SUBSCRIBE", "params": ["ticker@TATA_INR"]}
```

##  Testing

Run the test suite:

```bash
cd Backend/engine
npm test
```

Tests cover:
- Order matching logic
- Market depth calculations
- Trade execution scenarios

## 🚀 Deployment

### Production Considerations

1. **Database**: Use managed PostgreSQL with TimescaleDB
2. **Redis**: Use Redis Cluster for high availability
3. **Load Balancing**: Deploy multiple API instances behind a load balancer
4. **Monitoring**: Implement comprehensive logging and monitoring
5. **Security**: Add authentication, rate limiting, and input validation

### Docker Deployment

Build and deploy using Docker:

```bash
# Build services
docker build -t exchange-api ./Backend/api
docker build -t exchange-engine ./Backend/engine
docker build -t exchange-ws ./Backend/ws

# Deploy with docker-compose
docker-compose up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request


## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For questions and support, please open an issue in the repository or contact the development team.

---

**Note**: This is a development/educational project. For production use, additional security measures, testing, and compliance considerations are required.
