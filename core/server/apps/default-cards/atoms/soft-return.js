var atom = {
    name: 'soft-return',
    type: 'dom',
    render(opts) {
        return opts.env.dom.createElement('br');
    }
}

module.exports = atom;