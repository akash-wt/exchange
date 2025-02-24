import { Router } from "express";

export const tickersRouter = Router();

const tickers = [
  {
    symbol: "BTCUSDT",
    lastPrice: "49250.00",
    high: "50000.00",
    volume: "1200.50",
    priceChangePercent: "1.25",
  },
  {
    symbol: "ETHUSDT",
    lastPrice: "3200.00",
    high: "3300.00",
    volume: "850.75",
    priceChangePercent: "-0.85",
  },
  {
    symbol: "BNBUSDT",
    lastPrice: "410.50",
    high: "420.00",
    volume: "500.30",
    priceChangePercent: "0.50",
  },
];

tickersRouter.get("/", async (req, res) => {
  res.json(tickers);
});
