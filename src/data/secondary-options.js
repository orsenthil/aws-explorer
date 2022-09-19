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
};
