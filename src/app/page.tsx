// src/app/page.tsx
"use client";

import { TrendingUp } from "lucide-react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  Weight: { label: "Weight", color: "#2563eb" },
} satisfies ChartConfig;

const chartData = [
  { Month: "January", Weight: 140 },
  { Month: "February", Weight: 142 },
  { Month: "March", Weight: 148 },
  { Month: "April", Weight: 152 },
  { Month: "May", Weight: 157 },
  { Month: "June", Weight: 160 },
  { Month: "July", Weight: 168 },
  { Month: "August", Weight: 165 },
  { Month: "September", Weight: 158 },
  { Month: "October", Weight: 152 },
  { Month: "November", Weight: 160 },
  { Month: "December", Weight: 167 },
];

export default function Page() {
  return (
    // remove p-6 if your layout already pads children; keeping it here if you still want extra space
    <section className="space-y-6">
      {/* TITLE OF THE MAIN AREA */}
      <header>
        <h1 className="text-2xl font-bold text-white">Your progress so far...</h1>
        <p className="text-lg text-white/80 font-medium">
          Welcome to your fitness dashboard. Your data will appear here.
        </p>
      </header>

      <div className="parent">

        {/* BODY WEIGHT */}
        <Card className="glass child flex flex-col min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]   /* ↑ taller card */">
          <CardHeader className="pt-3 pb-1 shrink-0">
            <CardTitle className="text-white text-lg font-bold">Body Weight</CardTitle>
            <CardDescription className="text-white/80 text-sm">
              <div className="flex items-center gap-2 text-sm text-white">
                Trending up by 5.2% <svg className="h-4 w-4" />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1 min-h-0 p-0 overflow-visible">
            <div className="absolute inset-2 sm:inset-3">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart
                  data={chartData}
                  margin={{ top: 8, right: 16, bottom: 30, left: 16 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="Month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(v) => String(v).slice(0, 3)}
                    tick={{ fill: "rgba(255,255,255,0.9)" }}
                  />
                  <YAxis tick={false} tickLine={false} axisLine={false} width={0} />
                  <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                    allowEscapeViewBox={{ x: true, y: true }}
                    wrapperStyle={{ zIndex: 30 }}
                  />
                  <defs>
                    <linearGradient id="fillWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-Weight)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-Weight)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="Weight"
                    type="monotone"
                    stroke="var(--color-Weight)"
                    strokeWidth={2}
                    fill="url(#fillWeight)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>


        {/* Add more tiles; they’ll share the row and wrap automatically */}
        <Card className="child glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">Steps</CardTitle>
            <CardDescription className="text-white/80 text-sm">Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>…</CardContent>
        </Card>

        {/* Wider / taller variations */}
        <Card className="child child--wide glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">PRs</CardTitle>
            <CardDescription className="text-white/80 text-sm">Recent</CardDescription>
          </CardHeader>
          <CardContent>…</CardContent>
        </Card>

        <Card className="child child--wide glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">PRs</CardTitle>
            <CardDescription className="text-white/80 text-sm">Recent</CardDescription>
          </CardHeader>
          <CardContent>…</CardContent>
        </Card>

        <Card className="child glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">Steps</CardTitle>
            <CardDescription className="text-white/80 text-sm">Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>…</CardContent>
        </Card>

        <Card className="child glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-sm">Steps</CardTitle>
            <CardDescription className="text-white/80 text-sm">Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>…</CardContent>
        </Card>
      </div>
    </section>
  );
}
