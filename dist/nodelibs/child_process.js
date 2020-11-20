function unimplemented () {
  throw new Error('Node.js child_process module is not supported by jspm core' + (typeof Deno !== 'undefined' ? '. Deno support here is tracking in https://github.com/jspm/jspm-core/issues/4, +1\'s are appreciated!' : ' in the browser'));
}

var child_process = {
  _forkChild: unimplemented,
  ChildProcess: unimplemented,
  exec: unimplemented,
  execFile: unimplemented,
  execFileSync: unimplemented,
  execSync: unimplemented,
  fork: unimplemented,
  spawn: unimplemented,
  spawnSync: unimplemented
};

export default child_process;
export { unimplemented as ChildProcess, unimplemented as _forkChild, unimplemented as exec, unimplemented as execFile, unimplemented as execFileSync, unimplemented as execSync, unimplemented as fork, unimplemented as spawn, unimplemented as spawnSync };
