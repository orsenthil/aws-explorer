export const secondaryOptions = {
    eks: [
        {
            value: 'list-clusters',
            label: 'list clusters',
        },
        {
            value: 'attach-cluster-to-kubeconfig',
            label: 'attach cluster to kubeconfig',
            usage: 'aws eks update-kubeconfig --name $CLUSTER_NAME',
            nb: 'CLUSTER_NAME is the name of the cluster you want to attach to your kubernetes cluster (determined using KUBECONFIG value).',
        },
        {
            value: 'get-vpc-id',
            label: 'get vpc id',
            usage: 'aws eks describe-cluster --name $CLUSTER_NAME | jq -r "[.cluster | .resourcesVpcConfig | .vpcId][0]"',
        },
        {
            value: 'get-token',
            label: 'get token',
            usage: 'aws eks get-token --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'get-cluster-endpoint-and-version',
            label: 'get cluster endpoint and version',
            usage: 'aws eks describe-cluster --name $CLUSTER_NAME --query "cluster.{endpoint: endpoint, version: version}"',
        },
    ],
    install: [
        {
            value: 'install-aws-cli',
            label: 'install aws cli on linux',
            usage: 'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install',
            nb: 'this will install the latest version of the aws cli',
        },
    ],
};
