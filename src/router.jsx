import { Navigate, Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Study from './study';

export default function Router() {
  return (
    <div className="main-wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/app/*" element={<Study />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
