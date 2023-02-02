export const secondaryOptions = {
    cloudformation: [
        {
            value: 'delete-stack',
            label: 'delete stack',
            usage: 'aws cloudformation delete-stack --stack-name $STACK_NAME',
            description: 'Deletes the cloudformation stack with the given name.',
        },
    ],
    ec2: [
        {
            value: 'availability-zones',
            label: 'calls for availablity zones',
        },
        {
            value: 'vpc',
            label: 'queries regarding vpc',
        },
    ],
    eks: [
        {
            value: 'list-clusters',
            label: 'list clusters',
            usage: 'aws eks list-clusters',
            nb: 'List all EKS clusters in the current region',
        },
        {
            value: 'list-clusters',
            label: 'list clusters with endpoint',
            usage: 'aws eks list-clusters --endpoint $ENDPOINT',
            nb: 'List all EKS clusters in the current region against the $ENDPOINT which is the staging zone for the EKS cluster.',
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
        {
            value: 'associate-encryption-config',
            label: 'associate encryption config',
            usage: 'aws eks associate-encryption-config --cluster-name $CLUSTER_NAME --encryption-config file://$ENCRYPTION_CONFIG_FILE',
        },
        {
            value: 'associate-identity-provider-config',
            label: 'associate identity provider config',
            usage: 'aws eks associate-identity-provider-config --cluster-name $CLUSTER_NAME --oidc file://$OIDC_FILE',
        },
        {
            value: 'create-addon',
            label: 'create addon',
            usage: 'aws eks create-addon --cluster-name $CLUSTER_NAME --addon-name $ADDON_NAME --addon-version $ADDON_VERSION --service-account-role-arn $SERVICE_ACCOUNT_ROLE_ARN',
        },
        {
            value: 'create-cluster',
            label: 'create cluster',
            usage: 'aws eks create-cluster --name $CLUSTER_NAME --role-arn $ROLE_ARN --resources-vpc-config subnetIds=$SUBNET_IDS,securityGroupIds=$SECURITY_GROUP_IDS',
        },
        {
            value: 'create-fargate-profile',
            label: 'create fargate profile',
            usage: 'aws eks create-fargate-profile --cluster-name $CLUSTER_NAME --fargate-profile-name $FARGATE_PROFILE_NAME --pod-execution-role-arn $POD_EXECUTION_ROLE_ARN --selectors namespace=$NAMESPACE',
        },
        {
            value: 'create-nodegroup',
            label: 'create nodegroup',
            usage: 'aws eks create-nodegroup --cluster-name $CLUSTER_NAME --nodegroup-name $NODEGROUP_NAME --node-role $NODE_ROLE --subnets $SUBNETS --scaling-config minSize=$MIN_SIZE,maxSize=$MAX_SIZE,desiredSize=$DESIRED_SIZE',
        },
        {
            value: 'deregister-cluster',
            label: 'deregister cluster',
            usage: 'aws eks deregister-cluster --name $CLUSTER_NAME',
        },
        {
            value: 'describe-addon',
            label: 'describe addon',
            usage: 'aws eks describe-addon --cluster-name $CLUSTER_NAME --addon-name $ADDON_NAME',
        },
        {
            value: 'describe-addon-versions',
            label: 'describe addon versions',
            usage: 'aws eks describe-addon-versions --addon-name $ADDON_NAME',
        },
        {
            value: 'describe-cluster',
            label: 'describe cluster',
            usage: 'aws eks describe-cluster --name $CLUSTER_NAME',
        },
        {
            value: 'describe-fargate-profile',
            label: 'describe fargate profile',
            usage: 'aws eks describe-fargate-profile --cluster-name $CLUSTER_NAME --fargate-profile-name $FARGATE_PROFILE_NAME',
        },
        {
            value: 'describe-identity-provider-config',
            label: 'describe identity provider config',
            usage: 'aws eks describe-identity-provider-config --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'describe-nodegroup',
            label: 'describe nodegroup',
            usage: 'aws eks describe-nodegroup --cluster-name $CLUSTER_NAME --nodegroup-name $NODEGROUP_NAME',
        },
        {
            value: 'describe-update',
            label: 'describe update',
            usage: 'aws eks describe-update --name $CLUSTER_NAME --update-id $UPDATE_ID',
        },
        {
            value: 'disassociate-identity-provider-config',
            label: 'disassociate identity provider config',
            usage: 'aws eks disassociate-identity-provider-config --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'list-addons',
            label: 'list addons',
            usage: 'aws eks list-addons --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'list-clusters',
            label: 'list clusters',
            usage: 'aws eks list-clusters',
        },
        {
            value: 'list-fargate-profiles',
            label: 'list fargate profiles',
            usage: 'aws eks list-fargate-profiles --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'list-identity-provider-configs',
            label: 'list identity provider configs',
            usage: 'aws eks list-identity-provider-configs --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'list-nodegroups',
            label: 'list nodegroups',
            usage: 'aws eks list-nodegroups --cluster-name $CLUSTER_NAME',
        },
        {
            value: 'list-tags-for-resource',
            label: 'list tags for resource',
            usage: 'aws eks list-tags-for-resource --resource-arn $RESOURCE_ARN',
        },
        {
            value: 'list-updates',
            label: 'list updates',
            usage: 'aws eks list-updates --name $CLUSTER_NAME',
        },
        {
            value: 'register-cluster',
            label: 'register cluster',
            usage: 'aws eks register-cluster --name $CLUSTER_NAME --role-arn $ROLE_ARN --resources-vpc-config subnetIds=$SUBNET_IDS,securityGroupIds=$SECURITY_GROUP_IDS',
        },
        {
            value: 'tag-resource',
            label: 'tag resource',
            usage: 'aws eks tag-resource --resource-arn $RESOURCE_ARN --tags $TAGS',
        },
        {
            value: 'untag-resource',
            label: 'untag resource',
            usage: 'aws eks untag-resource --resource-arn $RESOURCE_ARN --tag-keys $TAG_KEYS',
        },
        {
            value: 'update-addon',
            label: 'update addon',
            usage: 'aws eks update-addon --cluster-name $CLUSTER_NAME --addon-name $ADDON_NAME --addon-version $ADDON_VERSION --service-account-role-arn $SERVICE_ACCOUNT_ROLE_ARN',
        },
        {
            value: 'update-cluster-config',
            label: 'update cluster config',
            usage: 'aws eks update-cluster-config --name $CLUSTER_NAME --resources-vpc-config subnetIds=$SUBNET_IDS,securityGroupIds=$SECURITY_GROUP_IDS',
        },
        {
            value: 'update-cluster-version',
            label: 'update cluster version',
            usage: 'aws eks update-cluster-version --name $CLUSTER_NAME --version $VERSION',
        },
        {
            value: 'update-kubeconfig',
            label: 'update kubeconfig',
            usage: 'aws eks update-kubeconfig --name $CLUSTER_NAME',
        },
        {
            value: 'update-nodegroup-config',
            label: 'update nodegroup config',
            usage: 'aws eks update-nodegroup-config --cluster-name $CLUSTER_NAME --nodegroup-name $NODEGROUP_NAME --scaling-config minSize=$MIN_SIZE,maxSize=$MAX_SIZE,desiredSize=$DESIRED_SIZE',
            nb: 'This command is used to update the configuration of an existing Amazon EKS managed node group.',
        },
        {
            value: 'update-nodegroup-version',
            label: 'update nodegroup version',
            usage: 'aws eks update-nodegroup-version --cluster-name $CLUSTER_NAME --nodegroup-name $NODEGROUP_NAME --version $VERSION',
            nb: 'This command is only available for managed node groups.',
        },
        {
            value: 'wait',
            label: 'wait',
            usage: 'aws eks wait --cluster-name $CLUSTER_NAME --nodegroup-name $NODEGROUP_NAME',
            nb: 'Wait for a cluster to reach a desired state.',
        }
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
