import OverviewStats from '../components/OverviewStats'
import SkillBarChart from '../components/SkillBarChart'
import AttentionScatter from '../components/AttentionScatter'
import StudentRadar from '../components/StudentRadar'
import StudentTable from '../components/StudentTable'
import Insights from '../components/Insights'

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cognitive Skills & Student Performance Dashboard</h1>
      <OverviewStats />
      <div className="grid grid-cols-2 gap-4 my-4">
        <SkillBarChart />
        <AttentionScatter />
      </div>
      <StudentRadar />
      <StudentTable />
      <Insights />
    </div>
  )
}
