// src/app/page.tsx
"use client";

// IMPORTS 
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const chartConfig = {
  Weight: { label: "Body Weight", color: "#2563eb" },
  Bench: { label: "Bench Press", color: "#e93f29ff" },
  Squat: { label: "Squat", color: "#dd8520ff" },
  Deadlift: { label: "Deadlift", color: "#c7b54eff" },
} satisfies ChartConfig;

const chartData = [
  { Month: "January", Weight: 140, Bench: 135, Squat: 225, Deadlift: 365 },
  { Month: "February", Weight: 142, Bench: 140, Squat: 235, Deadlift: 375 },
  { Month: "March", Weight: 148, Bench: 145, Squat: 250, Deadlift: 385 },
  { Month: "April", Weight: 152, Bench: 140, Squat: 265, Deadlift: 380 },
  { Month: "May", Weight: 157, Bench: 165, Squat: 285, Deadlift: 400 },
  { Month: "June", Weight: 160, Bench: 175, Squat: 300, Deadlift: 415 },
  { Month: "July", Weight: 168, Bench: 180, Squat: 315, Deadlift: 425 },
  { Month: "August", Weight: 165, Bench: 200, Squat: 340, Deadlift: 445 },
  { Month: "September", Weight: 158, Bench: 190, Squat: 325, Deadlift: 430 },
  { Month: "October", Weight: 152, Bench: 205, Squat: 345, Deadlift: 450 },
  { Month: "November", Weight: 160, Bench: 225, Squat: 370, Deadlift: 470 },
  { Month: "December", Weight: 167, Bench: 245, Squat: 395, Deadlift: 495 },
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
        <Card className="child glass flex flex-col min-h-[20rem] sm:min-h-[22rem] lg:min-h-[26rem]">
          <CardHeader className="pt-3 pb-1 shrink-0">
            <CardTitle className="text-white text-2xl font-bold">Body Weight</CardTitle>
            <CardDescription className="text-white/80 text-sm">
              <div className="flex items-center gap-2 text-sm text-white">Trending up by 5.2%</div>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1 min-h-0 p-0 overflow-visible">
            <div className="absolute inset-2 sm:inset-3">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart data={chartData} margin={{ top: 8, right: 16, bottom: 30, left: 16 }}>
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
                  <ChartTooltip
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


        {/* STRENGTH OVER TIME */}
        <Card className="child glass flex flex-col min-h-[20rem] sm:min-h-[22rem] lg:min-h-[26rem]">
          <CardHeader className="pt-3 pb-1 shrink-0">
            <CardTitle className="text-2xl font-bold text-white">How strong are you?</CardTitle>
            <CardDescription className="text-white/80 text-sm">
              <div className="text-sm text-white">Strength increased substantially!</div>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1 min-h-0 overflow-visible">
            <div className="absolute inset-2 sm:inset-3">
              <ChartContainer config={chartConfig} className="h-full w-full" >
                <AreaChart data={chartData} margin={{ top: 8, right: 16, left: 16, bottom: 30 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="Month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(v) => String(v).slice(0, 3)}
                    tick={{ fill: "rgba(255,255,255,0.9)" }}
                  />
                  <YAxis tick={false} tickLine={false} axisLine={false} width={1} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                    allowEscapeViewBox={{ x: true, y: true }}
                    wrapperStyle={{ zIndex: 30 }}
                  />
                  <defs>
                    <linearGradient id="fillBench" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="10%" stopColor="var(--color-Bench)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-Bench)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillSquat" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="10%" stopColor="var(--color-Squat)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-Squat)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillDeadlift" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="10%" stopColor="var(--color-Deadlift)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-Deadlift)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="Deadlift"
                    type="monotone"
                    stroke="var(--color-Deadlift)"
                    strokeWidth={2}
                    fill="url(#fillDeadlift)"
                  />
                  <Area
                    dataKey="Squat"
                    type="monotone"
                    stroke="var(--color-Squat)"
                    strokeWidth={2}
                    fill="url(#fillSquat)"
                  />
                  <Area
                    dataKey="Bench"
                    type="monotone"
                    stroke="var(--color-Bench)"
                    strokeWidth={2}
                    fill="url(#fillBench)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* FAVORITE RECIPES CARD */}
        <Card className="child--small glass flex flex-col min-h-[8.5rem] sm:min-h-[10rem] lg:min-h-[14rem] ">
          <CardHeader className="pt-3 shrink-0 pb-1 text-center">
            <CardTitle className="text-2xl text-white font-bold text-center">You love to eat ...</CardTitle>
            <CardDescription className="text-lg font-bold text-white text-center pt-4">Vienna Sausage !</CardDescription>
            <CardDescription className="text-sm text-white text-center pt-1">Protein: 30g | Carbs: 17g | Fats: 45g | Time to Cook: 20min</CardDescription>
            <CardFooter className="pt-8 flex justify-center">
              <Link href="/calories" className="block text-base text-md text-white hover:opacity-80 transition-opacity duration-200 ">View Recipe Here</Link>
            </CardFooter>
          </CardHeader>
        </Card>

        {/* QUICK ACTION (LINKS) */}
        <Card className="child--small glass flex flex-col min-h-[3rem] sm:min-h-[10rem] lg:min-h-[10rem]">
          <CardHeader className="pt-3 shrink-0 pb-1 text-center">
            <CardTitle className="text-2xl text-white font-bold text-center">Quick Actions</CardTitle>
            <CardDescription className="text-xl font-bold text-white text-center p-4">
              <div className="flex flex-wrap justify-center gap-2 md:flex-row">
                <Button variant="default" className="w-full glass-button py-3 text-white font-small">Button</Button>
                <Button variant="default" className="w-full glass-button py-3 text-white font-small">Button</Button>
                <Button variant="secondary" className="w-full glass-button py-3 text-white font-small">Button</Button>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* TMRW WORKOUT */}
        <Card className="child--small glass flex flex-col min-h-[3rem] sm:max-h-[3rem] lg:min-h-[10rem] max-h-[4.5rem]">
          <CardHeader className="pt-3 shrink-0 pb-1 text-center">
            <CardTitle className="text-2xl text-white font-bold text-center">What&apos;s Up Next...</CardTitle>
            <CardDescription className="text-3xl font-bold text-white text-center p-4">Back Day!</CardDescription>
          </CardHeader>
        </Card>

      </div>
    </section>
  );
}
