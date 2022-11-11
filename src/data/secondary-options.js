export const secondaryOptions = {
    eks: [
        {
            value: 'list-clusters',
            label: 'list clusters',
            usage: 'aws eks list-clusters',
            nb: 'List all EKS clusters in the current region',
        },
        {
            value: 'list-addons',
            label: 'list addons',
            usage: 'aws eks list-addons',
            nb: 'List all EKS addons in the current region',
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
        {
            value: 'describe-cluster',
            label: 'describe cluster',
            usage: 'aws eks describe-cluster --name $CLUSTER_NAME',
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
    ssm: [
        {
            value: 'list-parameters',
            label: 'list parameters',
            usage: 'aws ssm describe-parameters',
        },
        {
            value: 'get-parameter',
            label: 'get parameter',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-value',
            label: 'get parameter value',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Value"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-version',
            label: 'get parameter version',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Version"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-type',
            label: 'get parameter type',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Type"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-last-modified-date',
            label: 'get parameter last modified date',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.LastModifiedDate"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-arn',
            label: 'get parameter arn',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.ARN"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-data-type',
            label: 'get parameter data type',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.DataType"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-labels',
            label: 'get parameter labels',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Labels"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-tiers',
            label: 'get parameter tiers',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Tier"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-description',
            label: 'get parameter description',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.Description"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-allowed-pattern',
            label: 'get parameter allowed pattern',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --query "Parameter.AllowedPattern"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-parameter-secure-string',
            label: 'get parameter secure string',
            usage: 'aws ssm get-parameter --name $PARAMETER_NAME --with-decryption --query "Parameter.Value"',
            nb: 'PARAMETER_NAME is the name of the parameter you want to get',
        },
        {
            value: 'get-ami-description',
            label: 'get ami description',
            usage: 'aws ssm get-parameter --name /aws/service/eks/optimized-ami/1.22/amazon-linux-2/recommended',
        },
    ],
};
