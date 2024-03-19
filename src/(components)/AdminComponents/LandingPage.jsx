import React from "react";
import { LineChart } from "./Charts/LineCharts";
import { Line1Chart } from "./Charts/Line1Chart";
import { PieChart } from "./Charts/PieCharts";
import { DonutPieChart } from "./Charts/DonutChart";
import { BarChart } from "./Charts/BarChart";
import { DotChart } from "./Charts/DotChart";
import { BubbleChart } from "./Charts/BubbleChart";
import { CandlestickChart } from "./Charts/CandleChart";
import { ColorChart } from "./Charts/ColorChart";
import { ColumnChart } from "./Charts/ColumnChart";
import { ComboChart } from "./Charts/ComboChart";
import { CovChart } from "./Charts/CovChart";
import { GanttChart } from "./Charts/GanttChart";
import { DiffChart } from "./Charts/DiffChart";
import { GeoChart } from "./Charts/GeoChart";
import { Histogram } from "./Charts/Histogram";
import { LanguagePieChart } from "./Charts/LanguageChart";
import { LongBarChart } from "./Charts/LongBar";
import { MultiChart } from "./Charts/MultiColor";
import { SelectorChart } from "./Charts/SelectorChart";
import { StartChart } from "./Charts/StartChart";
import { ThreeDeeChart } from "./Charts/ThreeDeyChart";
import { TreeChart } from "./Charts/TreeChart";
import { WorldChart } from "./Charts/WorldChart";

export default function LandingPage() {
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/**<!-- End Page Title --> */}
      <section class="section dashboard">
        <div class="row">
        <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Line Chart</h5>
                <LineChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Line Chart</h5>
                <Line1Chart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pie Chart</h5>
                <PieChart/>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Donut Chart</h5>
                <DonutPieChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bar Chart</h5>
                <BarChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dot Chart</h5>
                <DotChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bubble Chart</h5>
                <BubbleChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Candle Chart</h5>
                <CandlestickChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Color Chart</h5>
                <ColorChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Column Chart</h5>
                <ColumnChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Combo Chart</h5>
                <ComboChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cov Chart</h5>
                <CovChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Gantt Chart</h5>
                <GanttChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Diff Chart</h5>
                <DiffChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Geo Chart</h5>
                <GeoChart/>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bar Chart</h5>
                <Histogram />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Language Chart</h5>
                <LanguagePieChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Long Bar Chart</h5>
                <LongBarChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Multicolor Chart</h5>
                <MultiChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Selector Chart</h5>
                <SelectorChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Start Chart</h5>
                <StartChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">3D Chart</h5>
                <ThreeDeeChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tree Chart</h5>
                <TreeChart />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">World Chart</h5>
                <WorldChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
