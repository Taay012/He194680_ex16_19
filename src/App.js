import React from 'react';
import EventHandlingDemo from './Component/EventHandlingDemo.js';
import RenderAndCommitDemo from './Component/RenderAndCommitDemo.js';
import SnapshotDemo from './Component/SnapshotDemo.js';
import ValidationDemo from './Component/ValidationDemo.js';

function App() {
  return (
    <div>
      <EventHandlingDemo />
      <RenderAndCommitDemo />
      <SnapshotDemo />
      <ValidationDemo />
    </div>
  );
}

export default App;
