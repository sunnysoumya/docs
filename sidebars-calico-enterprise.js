// This is the navigation file for Calico Enterprise

module.exports = {
  calicoEnterpriseSidebar: [
    {
      type: 'category',
      label: 'About',
      link: {
        type: 'doc',
        id: 'about/index',
      },
      items: [
        'about/product-comparison',
      ],
    },
    {
      type: 'category',
      label: 'Install and upgrade',
      link: {type: 'doc', id:'getting-started/index'},
      items: [
        'getting-started/compatibility',
        {
          type: 'category',
          label: 'Install on clusters',
          link: {type: 'doc', id:'getting-started/install-on-clusters/index'},
          items: [
            {
              type: 'category',
              label: 'Kubernetes',
              link: {type: 'doc', id:'getting-started/install-on-clusters/kubernetes/index'},
              items: [
                'getting-started/install-on-clusters/kubernetes/quickstart',
                'getting-started/install-on-clusters/kubernetes/options-install',
                'getting-started/install-on-clusters/kubernetes/generic-install',
                'getting-started/install-on-clusters/kubernetes/helm',
              ],
            },
            {
              type: 'category',
              label: 'OpenShift',
              link: {type: 'doc', id:'getting-started/install-on-clusters/openshift/index'},
              items: [
                'getting-started/install-on-clusters/openshift/requirements',
                'getting-started/install-on-clusters/openshift/installation',
              ],
            },
            'getting-started/install-on-clusters/aks',
            'getting-started/install-on-clusters/eks',
            'getting-started/install-on-clusters/gke',
            'getting-started/install-on-clusters/aws',
            'getting-started/install-on-clusters/docker-enterprise',
            'getting-started/install-on-clusters/rancher',
            'getting-started/install-on-clusters/rke2',
            'getting-started/install-on-clusters/rancher-ui',
            'getting-started/install-on-clusters/tkg',
            {
              type: 'category',
              label: 'Calico Enterprise for Windows',
              link: {type: 'doc', id:'getting-started/install-on-clusters/windows-calico/index'},
              items: [
                'getting-started/install-on-clusters/windows-calico/limitations',
                'getting-started/install-on-clusters/windows-calico/requirements',
                'getting-started/install-on-clusters/windows-calico/operator',
                {
                  type: 'category',
                  label: 'Manual Install',
                  link: {type: 'doc', id:'getting-started/install-on-clusters/windows-calico/manual-install/index'},
                  items: [
                    'getting-started/install-on-clusters/windows-calico/manual-install/quickstart',
                    'getting-started/install-on-clusters/windows-calico/manual-install/standard',
                    'getting-started/install-on-clusters/windows-calico/manual-install/kubeconfig',
                    'getting-started/install-on-clusters/windows-calico/manual-install/maintain',
                    'getting-started/install-on-clusters/windows-calico/manual-install/openshift-installation',
                  ],
                },
                'getting-started/install-on-clusters/windows-calico/rancher',
                'getting-started/install-on-clusters/windows-calico/demo',
                'getting-started/install-on-clusters/windows-calico/flowlogs',
                'getting-started/install-on-clusters/windows-calico/dnspolicy',
                'getting-started/install-on-clusters/windows-calico/troubleshoot',
              ],
            },
            {
              type: 'category',
              label: 'Install from a private registry',
              link: {type: 'doc', id:'getting-started/install-on-clusters/private-registry/index'},
              items: [
                'getting-started/install-on-clusters/private-registry/private-registry-regular',
                'getting-started/install-on-clusters/private-registry/private-registry-image-path',
              ],
            },
            'getting-started/install-on-clusters/calico-enterprise',
            'getting-started/install-on-clusters/requirements',
          ],
        },
        {
          type: 'category',
          label: 'Install on non-cluster hosts',
          link: {type: 'doc', id:'getting-started/bare-metal/index'},
          items: [
            'getting-started/bare-metal/about',
            'getting-started/bare-metal/requirements',
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          link: {type: 'doc', id:'getting-started/upgrading/index'},
          items: [
            {
              type: 'category',
              label: 'Upgrade Calico Enterprise',
              link: {type: 'doc', id:'getting-started/upgrading/upgrading-enterprise/index'},
              items: [
                {
                  type: 'category',
                  label: 'Kubernetes',
                  link: {type: 'doc', id:'getting-started/upgrading/upgrading-enterprise/kubernetes-upgrade-tsee/index'},
                  items: [
                    'getting-started/upgrading/upgrading-enterprise/kubernetes-upgrade-tsee/helm',
                    'getting-started/upgrading/upgrading-enterprise/kubernetes-upgrade-tsee/operator',
                  ],
                },
                'getting-started/upgrading/upgrading-enterprise/openshift-upgrade',
              ],
            },
            {
              type: 'category',
              label: 'Upgrade from Calico to Calico Enterprise',
              link: {type: 'doc', id:'getting-started/upgrading/upgrading-calico-to-calico-enterprise/index'},
              items: [
                {
                  type: 'category',
                  label: 'Kubernetes',
                  link: {type: 'doc', id:'getting-started/upgrading/upgrading-calico-to-calico-enterprise/upgrade-to-tsee/index'},
                  items: [
                    'getting-started/upgrading/upgrading-calico-to-calico-enterprise/upgrade-to-tsee/standard',
                    'getting-started/upgrading/upgrading-calico-to-calico-enterprise/upgrade-to-tsee/helm',
                  ],
                },
                'getting-started/upgrading/upgrading-calico-to-calico-enterprise/upgrade-to-tsee-openshift',
              ],
            },
          ],
        },
        'getting-started/manifest-archive',
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      link: {type: 'doc', id: 'networking/index'},
      items: [
        'networking/determine-best-networking',
        {
          type: 'category',
          label: 'Networking basics',
          link: {type: 'doc', id: 'networking/training/index'},
          items: [
            'networking/training/about-networking',
            'networking/training/about-kubernetes-networking',
          ],
        },
        {
          type: 'category',
          label: 'Configure Calico Enterprise networking',
          link: {type: 'doc', id: 'networking/configuring/index'},
          items: [
            'networking/configuring/bgp',
            'networking/configuring/dual-tor',
            'networking/configuring/multiple-networks',
            'networking/configuring/vxlan-ipip',
            'networking/configuring/advertise-service-ips',
            'networking/configuring/mtu',
            'networking/configuring/custom-bgp-config',
            'networking/configuring/workloads-outside-cluster',
            'networking/configuring/pod-mac-address',
            'networking/configuring/node-local-dns-cache',
          ],
        },
        {
          type: 'category',
          label: 'Egress gateways',
          link: {type: 'doc', id: 'networking/egress/index'},
          items: [
            'networking/egress/egress-gateway-on-prem',
            'networking/egress/egress-gateway-azure',
            'networking/egress/egress-gateway-aws',
            'networking/egress/egress-gateway-maintenance',
            'networking/egress/external-network',
            'networking/egress/troubleshoot',
          ],
        },
        {
          type: 'category',
          label: 'Customize IP address management',
          link: {type: 'doc', id: 'networking/ipam/index'},
          items: [
            'networking/ipam/get-started-ip-addresses',
            'networking/ipam/initial-ippool',
            'networking/ipam/ip-autodetection',
            'networking/ipam/ipv6',
            'networking/ipam/use-specific-ip',
            'networking/ipam/assign-ip-addresses-topology',
            'networking/ipam/migrate-pools',
            'networking/ipam/change-block-size',
            'networking/ipam/legacy-firewalls',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Network policy',
      link: {type: 'doc', id: 'network-policy/index'},
      items: [
        {
          type: 'category',
          label: 'Policy recommendations',
          link: {type: 'doc', id: 'network-policy/recommendations/index'},
          items: [
            'network-policy/recommendations/policy-recommendations',
            'network-policy/recommendations/learn-about-policy-recommendations',
          ],
        },
        'network-policy/policy-best-practices',
        {
          type: 'category',
          label: 'Tiered network policy',
          link: {type: 'doc', id: 'network-policy/policy-tiers/index'},
          items: [
            'network-policy/policy-tiers/tiered-policy',
            'network-policy/policy-tiers/allow-tigera',
            'network-policy/policy-tiers/policy-tutorial-ui',
            'network-policy/policy-tiers/rbac-tiered-policies',
          ],
        },
        'network-policy/networksets',
        'network-policy/default-deny',
        'network-policy/staged-network-policies',
        'network-policy/policy-troubleshooting',
        {
          type: 'category',
          label: 'Calico Enterprise network policy for beginners',
          link: {type: 'doc', id: 'network-policy/beginners/index'},
          items: [
            'network-policy/beginners/kubernetes-default-deny',
            'network-policy/beginners/calico-network-policy',
            "network-policy/beginners/calico-labels",
            'network-policy/beginners/simple-policy-cnx',
            {
              type: 'category',
              label: 'Policy rules',
              link: {type: 'doc', id: 'network-policy/beginners/policy-rules/index'},
              items: [
                'network-policy/beginners/policy-rules/policy-rules-overview',
                'network-policy/beginners/policy-rules/namespace-policy',
                'network-policy/beginners/policy-rules/service-accounts',
                'network-policy/beginners/policy-rules/service-policy',
                'network-policy/beginners/policy-rules/external-ips-policy',
                'network-policy/beginners/policy-rules/icmp-ping',
              ],
            },
            {
              type: 'category',
              label: 'Policy for services',
              link: {type: 'doc', id: 'network-policy/beginners/services/index'},
              items: [
                'network-policy/beginners/services/kubernetes-node-ports',
                'network-policy/beginners/services/services-cluster-ips',
              ],
            },
          ],
        },
        'network-policy/domain-based-policy',
        {
          type: 'category',
          label: 'Application layer policies',
          link: {type: 'doc', id: 'network-policy/application-layer-policies/index'},
          items: [
            'network-policy/application-layer-policies/alp',
            'network-policy/application-layer-policies/alp-tutorial',
          ],
        },
        {
          type: 'category',
          label: 'Policy for firewalls',
          link: {type: 'doc', id: 'network-policy/policy-firewalls/index'},
          items: [
            {
              type: 'category',
              label: 'Fortinet firewall integrations',
              link: {type: 'doc', id: 'network-policy/policy-firewalls/fortinet-integration/index'},
              items: [
                'network-policy/policy-firewalls/fortinet-integration/overview',
                'network-policy/policy-firewalls/fortinet-integration/firewall-integration',
                'network-policy/policy-firewalls/fortinet-integration/fortimgr-integration',
              ],
            },
            {
              type: 'category',
              label: 'AWS security groups integration',
              link: {type: 'doc', id: 'network-policy/policy-firewalls/aws-integration/index'},
              items: [
                'network-policy/policy-firewalls/aws-integration/get-started',
                'network-policy/policy-firewalls/aws-integration/aws-security-group-integration',
                'network-policy/policy-firewalls/aws-integration/tiers-and-policy',
                'network-policy/policy-firewalls/aws-integration/metadata-access',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Policy for hosts',
          link: {type: 'doc', id: 'network-policy/hosts/index'},
          items: [
            'network-policy/hosts/protect-hosts',
            'network-policy/hosts/kubernetes-nodes',
            'network-policy/hosts/protect-hosts-tutorial',
            'network-policy/hosts/host-forwarded-traffic',
          ],
        },
        {
          type: 'category',
          label: 'Policy for extreme traffic',
          link: {type: 'doc', id: 'network-policy/extreme-traffic/index'},
          items: [
            'network-policy/extreme-traffic/high-connection-workloads',
            'network-policy/extreme-traffic/defend-dos-attack',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes for beginners',
          link: {type: 'doc', id: 'network-policy/get-started/index'},
          items: [
            'network-policy/get-started/about-network-policy',
            'network-policy/get-started/kubernetes-network-policy',
            'network-policy/get-started/kubernetes-demo',
            'network-policy/get-started/kubernetes-policy-basic',
            'network-policy/get-started/kubernetes-policy-advanced',
            'network-policy/get-started/about-kubernetes-services',
            'network-policy/get-started/about-kubernetes-ingress',
            'network-policy/get-started/about-kubernetes-egress',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Visibility and troubleshooting',
      link: {type: 'doc', id: 'visibility/index'},
      items: [
        'visibility/get-started-cem',
        'visibility/alerts',
        'visibility/kibana',
        'visibility/packetcapture',
        'visibility/visualize-traffic',
        {
          type: 'category',
          label: 'Calico Enterprise logs',
          link: {type: 'doc', id: 'visibility/elastic/index'},
          items: [
            'visibility/elastic/overview',
            'visibility/elastic/retention',
            'visibility/elastic/archive-storage',
            'visibility/elastic/rbac-elasticsearch',
            {
              type: 'category',
              label: 'Flow logs',
              link: {type: 'doc', id: 'visibility/elastic/flow/index'},
              items: [
                'visibility/elastic/flow/datatypes',
                'visibility/elastic/flow/filtering',
                'visibility/elastic/flow/aggregation',
                'visibility/elastic/flow/hep',
                'visibility/elastic/flow/tcpstats',
                'visibility/elastic/flow/processpath',
              ],
            },
            'visibility/elastic/audit-overview',
            {
              type: 'category',
              label: 'DNS logs',
              link: {type: 'doc', id: 'visibility/elastic/dns/index'},
              items: [
                'visibility/elastic/dns/dns-logs',
                'visibility/elastic/dns/filtering-dns',
              ],
            },
            'visibility/elastic/bgp',
            {
              type: 'category',
              label: 'L7 logs',
              link: {type: 'doc', id: 'visibility/elastic/l7/index'},
              items: [
                'visibility/elastic/l7/configure',
                'visibility/elastic/l7/datatypes',
              ],
            },
            'visibility/elastic/troubleshoot',
          ],
        },
        'visibility/kube-audit',
        'visibility/iptables',
      ],
    },
    {
      type: 'category',
      label: 'Multi-cluster management',
      link: {type: 'doc', id: 'multicluster/index'},
      items: [
        {
          type: 'category',
          label: 'Set up multi-cluster management',
          link: {type: 'doc', id: 'multicluster/set-up-multi-cluster-management/index'},
          items: [
            {
              type: 'category',
              label: 'Standard operator install',
              link: {type: 'doc', id: 'multicluster/set-up-multi-cluster-management/standard-install/index'},
              items: [
                'multicluster/set-up-multi-cluster-management/standard-install/create-a-management-cluster',
                'multicluster/set-up-multi-cluster-management/standard-install/create-a-managed-cluster',
              ],
            },
            {
              type: 'category',
              label: 'Helm install',
              link: {type: 'doc', id: 'multicluster/set-up-multi-cluster-management/helm-install/index'},
              items: [
                'multicluster/set-up-multi-cluster-management/helm-install/create-a-management-cluster-helm',
                'multicluster/set-up-multi-cluster-management/helm-install/create-a-managed-cluster-helm',
              ],
            },
          ],
        },
        'multicluster/fine-tune-deployment',
        'multicluster/change-cluster-type',
        {
          type: 'category',
          label: 'Cluster mesh',
          link: {type: 'doc', id: 'multicluster/federation/index'},
          items: [
            'multicluster/federation/overview',
            'multicluster/federation/kubeconfig',
            'multicluster/federation/services-controller',
            'multicluster/federation/aws',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Threat defense',
      link: {type: 'doc', id: 'threat/index'},
      items: [
        'threat/security-event-management',
        'threat/suspicious-ips',
        'threat/suspicious-domains',
        'threat/suspicious-external-ips',
        'threat/tor-vpn-feed-and-dashboard',
        'threat/honeypod/honeypods',
        'threat/deeppacketinspection',
        'threat/web-application-firewall',
      ],
    },
    {
      type: 'category',
      label: 'Compliance and security',
      link: {type: 'doc', id: 'compliance/index'},
      items: [
        'compliance/overview',
        'compliance/compliance-reports-cis',
        'compliance/encrypt-cluster-pod-traffic',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      link: {type: 'doc', id: 'operations/index'},
      items: [
        {
          type: 'category',
          label: 'Calico Enterprise Manager UI',
          link: {type: 'doc', id: 'operations/cnx/index'},
          items: [
            'operations/cnx/access-the-manager',
            'operations/cnx/authentication-quickstart',
            'operations/cnx/configure-identity-provider',
            'operations/cnx/roles-and-permissions',
          ],
        },
        {
          type: 'category',
          label: 'Secure component communications',
          link: {type: 'doc', id: 'operations/comms/index'},
          items: [
            'operations/comms/crypto-auth',
            'operations/comms/secure-metrics',
            'operations/comms/secure-bgp',
            'operations/comms/manager-tls',
            'operations/comms/log-storage-tls',
            'operations/comms/linseed-tls',
            'operations/comms/apiserver-tls',
            'operations/comms/typha-node-tls',
            'operations/comms/compliance-tls',
            'operations/comms/packetcapture-tls',
            'operations/comms/certificate-management',
          ],
        },
        {
          type: 'category',
          label: 'CLIs',
          link: {type: 'doc', id: 'operations/clis/index'},
          items: [
            {
              type: 'category',
              label: 'calicoctl',
              link: {type: 'doc', id: 'operations/clis/calicoctl/index'},
              items: [
                'operations/clis/calicoctl/install',
                {
                  type: 'category',
                  label: 'Configure calicoctl',
                  link: {type: 'doc', id: 'operations/clis/calicoctl/configure/index'},
                  items: [
                    'operations/clis/calicoctl/configure/overview',
                    'operations/clis/calicoctl/configure/datastore',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'calicoq',
              link: {type: 'doc', id: 'operations/clis/calicoq/index'},
              items: [
                'operations/clis/calicoq/installing',
                {
                  type: 'category',
                  label: 'Configure calicoq',
                  link: {type: 'doc', id: 'operations/clis/calicoq/configure/index'},
                  items: [
                    'operations/clis/calicoq/configure/overview',
                    'operations/clis/calicoq/configure/datastore',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Storage',
          link: {type: 'doc', id: 'operations/logstorage/index'},
          items: [
            'operations/logstorage/log-storage-recommendations',
            'operations/logstorage/create-storage',
            'operations/logstorage/adjust-log-storage-size',
            'operations/logstorage/advanced-node-scheduling',
          ],
        },
        'operations/license-options',
        {
          type: 'category',
          label: 'Monitoring',
          link: {type: 'doc', id: 'operations/monitor/index'},
          items: [
            {
              type: 'category',
              label: 'Prometheus',
              link: {type: 'doc', id: 'operations/monitor/prometheus/index'},
              items: [
                'operations/monitor/prometheus/support',
                'operations/monitor/prometheus/byo-prometheus',
                'operations/monitor/prometheus/configure-prometheus',
                'operations/monitor/prometheus/alertmanager',
              ],
            },
            {
              type: 'category',
              label: 'Metrics',
              link: {type: 'doc', id: 'operations/monitor/metrics/index'},
              items: [
                'operations/monitor/metrics/bgp-metrics',
                'operations/monitor/metrics/license-agent',
                'operations/monitor/metrics/policy-metrics',
                'operations/monitor/metrics/elasticsearch-and-fluentd-metrics',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'eBPF',
          link: {type: 'doc', id: 'operations/ebpf/index'},
          items: [
            'operations/ebpf/use-cases-ebpf',
            'operations/ebpf/enabling-ebpf',
            'operations/ebpf/install',
            'operations/ebpf/troubleshoot-ebpf',
          ],
        },
        'operations/decommissioning-a-node',
        'operations/fips',
        {
          type: 'category',
          label: 'Troubleshooting',
          link: {type: 'doc', id: 'operations/troubleshoot/index'},
          items: [
            'operations/troubleshoot/troubleshooting',
            'operations/troubleshoot/commands',
            'operations/troubleshoot/component-logs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/index'},
      items: [
        'reference/api',
        'reference/installation/api',
        'reference/installation/helm_customization',
        {
          type: 'category',
          label: 'CLIs',
          link: {type: 'doc', id: 'reference/clis/index'},
          items: [
            {
              type: 'category',
              label: 'calicoctl',
              link: {type: 'doc', id: 'reference/clis/calicoctl/index'},
              items: [
                'reference/clis/calicoctl/overview',
                'reference/clis/calicoctl/apply',
                {
                  type: 'category',
                  label: 'bgp',
                  link: {type: 'doc', id: 'reference/clis/calicoctl/bgp/index'},
                  items: [
                    'reference/clis/calicoctl/bgp/overview',
                    'reference/clis/calicoctl/bgp/peers',
                  ],
                },
                'reference/clis/calicoctl/captured-packets',
                {
                  type: 'category',
                  label: 'cluster',
                  link: {type: 'doc', id: 'reference/clis/calicoctl/cluster/index'},
                  items: [
                    'reference/clis/calicoctl/cluster/overview',
                    'reference/clis/calicoctl/cluster/diags',

                  ]

                },
                'reference/clis/calicoctl/convert',
                'reference/clis/calicoctl/create',
                'reference/clis/calicoctl/delete',
                'reference/clis/calicoctl/get',
                {
                  type: 'category',
                  label: 'ipam',
                  link: {type: 'doc', id: 'reference/clis/calicoctl/ipam/index'},
                  items: [
                    'reference/clis/calicoctl/ipam/overview',
                    'reference/clis/calicoctl/ipam/check',
                    'reference/clis/calicoctl/ipam/release',
                    'reference/clis/calicoctl/ipam/show',
                    'reference/clis/calicoctl/ipam/configure',
                    'reference/clis/calicoctl/ipam/split',
                  ],
                },
                {
                  type: 'category',
                  label: 'datastore',
                  link: {type: 'doc', id: 'reference/clis/calicoctl/datastore/index'},
                  items: [
                    'reference/clis/calicoctl/datastore/overview',
                    {
                      type: 'category',
                      label: 'migrate',
                      link: {type: 'doc', id: 'reference/clis/calicoctl/datastore/migrate/index'},
                      items: [
                        'reference/clis/calicoctl/datastore/migrate/overview',
                        'reference/clis/calicoctl/datastore/migrate/lock',
                        'reference/clis/calicoctl/datastore/migrate/unlock',
                      ],
                    },
                  ],
                },
                'reference/clis/calicoctl/label',
                {
                  type: 'category',
                  label: 'node',
                  link: {type: 'doc', id: 'reference/clis/calicoctl/node/index'},
                  items: [
                    'reference/clis/calicoctl/node/overview',
                    'reference/clis/calicoctl/node/run',
                    'reference/clis/calicoctl/node/status',
                    'reference/clis/calicoctl/node/diags',
                    'reference/clis/calicoctl/node/checksystem',
                  ],
                },
                'reference/clis/calicoctl/patch',
                'reference/clis/calicoctl/replace',
                'reference/clis/calicoctl/version',
              ],
            },
            {
              type: 'category',
              label: 'calicoq',
              link: {type: 'doc', id: 'reference/clis/calicoq/index'},
              items: [
                'reference/clis/calicoq/overview',
                'reference/clis/calicoq/selectors',
                'reference/clis/calicoq/endpoint',
                'reference/clis/calicoq/eval',
                'reference/clis/calicoq/host',
                'reference/clis/calicoq/policy',
                'reference/clis/calicoq/version',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Resource definitions',
          link: {type: 'doc', id: 'reference/resources/index'},
          items: [
            'reference/resources/overview',
            'reference/resources/bgpconfig',
            'reference/resources/bgppeer',
            'reference/resources/bgpfilter',
            'reference/resources/blockaffinity',
            'reference/resources/caliconodestatus',
            {
              type: 'category',
              label: 'Compliance reports',
              link: {type: 'doc', id: 'reference/resources/compliance-reports/index'},
              items: [
                'reference/resources/compliance-reports/overview',
                'reference/resources/compliance-reports/inventory',
                'reference/resources/compliance-reports/network-access',
                'reference/resources/compliance-reports/policy-audit',
                'reference/resources/compliance-reports/cis-benchmark',
              ]
            },
            'reference/resources/deeppacketinspection',
            'reference/resources/externalnetwork',
            'reference/resources/felixconfig',
            'reference/resources/globalalert',
            'reference/resources/globalnetworkpolicy',
            'reference/resources/globalnetworkset',
            'reference/resources/globalreport',
            'reference/resources/globalthreatfeed',
            'reference/resources/hostendpoint',
            'reference/resources/ippool',
            'reference/resources/ipreservation',
            'reference/resources/ipamconfig',
            'reference/resources/licensekey',
            'reference/resources/kubecontrollersconfig',
            'reference/resources/managedcluster',
            'reference/resources/networkpolicy',
            'reference/resources/networkset',
            'reference/resources/node',
            'reference/resources/packetcapture',
            'reference/resources/policyrecommendations',
            'reference/resources/profile',
            'reference/resources/remoteclusterconfiguration',
            'reference/resources/stagedglobalnetworkpolicy',
            'reference/resources/stagedkubernetesnetworkpolicy',
            'reference/resources/stagednetworkpolicy',
            'reference/resources/tier',
            'reference/resources/workloadendpoint',
          ],
        },
        {
          type: 'category',
          label: 'Architecture and network design',
          link: {type: 'doc', id: 'reference/architecture/index'},
          items: [
            'reference/architecture/overview',
            'reference/architecture/data-path',
            {
              type: 'category',
              label: 'Network design',
              link: {type: 'doc', id: 'reference/architecture/design/index'},
              items: [
                'reference/architecture/design/l2-interconnect-fabric',
                'reference/architecture/design/l3-interconnect-fabric',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Component resources',
          link: {type: 'doc', id: 'reference/component-resources/index'},
          items: [
            'reference/component-resources/configuration',
            {
              type: 'category',
              label: 'Calico Enterprise Kubernetes controllers',
              link: {type: 'doc', id: 'reference/component-resources/kube-controllers/index'},
              items: [
                'reference/component-resources/kube-controllers/configuration',
                'reference/component-resources/kube-controllers/prometheus',
              ],
            },
            {
              type: 'category',
              label: 'Calico Enterprise node (cnx-node)',
              link: {type: 'doc', id: 'reference/component-resources/node/index'},
              items: [
                'reference/component-resources/node/configuration',
                {
                  type: 'category',
                  label: 'Felix',
                  link: {type: 'doc', id: 'reference/component-resources/node/felix/index'},
                  items: [
                    'reference/component-resources/node/felix/configuration',
                    'reference/component-resources/node/felix/prometheus',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Typha for scaling',
              link: {type: 'doc', id: 'reference/component-resources/typha/index'},
              items: [
                'reference/component-resources/typha/overview',
                'reference/component-resources/typha/configuration',
                'reference/component-resources/typha/prometheus',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Configuration on public clouds',
          link: {type: 'doc', id: 'reference/public-cloud/index'},
          items: [
            'reference/public-cloud/aws',
            'reference/public-cloud/azure',
            'reference/public-cloud/gce',
          ],
        },
        {
          type: 'category',
          label: 'Host endpoints',
          link: {type: 'doc', id: 'reference/host-endpoints/index'},
          items: [
            'reference/host-endpoints/overview',
            'reference/host-endpoints/connectivity',
            'reference/host-endpoints/objects',
            'reference/host-endpoints/selector',
            'reference/host-endpoints/failsafe',
            'reference/host-endpoints/pre-dnat',
            'reference/host-endpoints/forwarded',
            'reference/host-endpoints/summary',
            'reference/host-endpoints/conntrack',
          ],
        },
        'reference/attribution',
        'reference/rest-api-reference',
        'reference/component-versions',
        'reference/faq',
        'reference/support-policy',
      ],
    },
    {
      type: 'doc',
      id: 'release-notes/index',
      label: 'Release notes', // sidebar label
    },
  ],
};
