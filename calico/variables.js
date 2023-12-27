const releases = require('./releases.json');

const variables = {
  releaseTitle: 'v3.27.0',
  prodname: 'Calico',
  prodnamedash: 'calico',
  version: 'v3.27',
  baseUrl: '/calico/latest',
  filesUrl: 'https://projectcalico.docs.tigera.io/v3.27',
  tutorialFilesURL: 'https://docs.tigera.io/files',
  calicoReleasesURL: 'https://github.com/projectcalico/calico/releases/download',
  tmpScriptsURL: 'https://docs.tigera.io/calico/3.27',
  windowsScriptsURL: 'https://raw.githubusercontent.com/kubernetes-sigs/sig-windows-tools/master/hostprocess',
  prodnameWindows: 'Calico for Windows',
  prodnamedashWindows: 'calico-for-windows',
  nodecontainer: 'calico/node',
  noderunning: 'calico-node',
  rootDirWindows: 'C:\\CalicoWindows',
  ppa_repo_name: 'calico-3.27',
  manifestsUrl: 'https://raw.githubusercontent.com/projectcalico/calico/v3.27.0',
  releases,
  registry: '',
  vppbranch: 'master',
  tigeraOperator: releases[0]['tigera-operator'],
  tigeraOperatorVersionShort: releases[0]['tigera-operator'].version.split('.').slice(0, 2).join('.'),
  imageNames: {
    'calico/node': 'calico/node',
    calicoctl: 'calico/ctl',
    typha: 'calico/typha',
    'calico/cni': 'calico/cni',
    'calico/apiserver': 'calico/apiserver',
    'calico/kube-controllers': 'calico/kube-controllers',
    'calico-upgrade': 'calico-upgrade',
    'calico/node-windows': 'calico/node-windows',
    'calico/cni-windows': 'calico/cni-windows',
    flannel: 'docker.io/flannelcni/flannel',
    flannelMigration: 'calico/flannel-migration-controller',
    'calico/dikastes': 'calico/dikastes',
    'pilot-webhook': 'calico/pilot-webhook',
    flexvol: 'calico/pod2daemon-flexvol',
    'csi-driver': 'calico/csi',
    'csi-node-driver-registrar': 'calico/node-driver-registrar',
  },
};

module.exports = variables;
