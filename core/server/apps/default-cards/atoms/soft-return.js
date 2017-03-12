var atom = {
    name: 'soft-return',
    type: 'dom',
    render() {
        return opts.env.dom.createElement('br');
    }
}

module.exports = atom;