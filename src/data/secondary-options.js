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
            nb: 'cluster-name is the name of the cluster you want to attach to your kubeconfig',
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
